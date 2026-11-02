'use client';

import { useId, useState } from 'react';

// The Reading Light app's own range: 6500 K daylight down to 1800 K
// candlelight, and past that, Ember.
const MIN = 1500;
const MAX = 6500;
const EMBER_BELOW = 1800;
const EMBER = [176, 24, 14] as const;

/** Approximate RGB of a black body at the given temperature. */
function kelvinToRgb(kelvin: number): [number, number, number] {
  const t = kelvin / 100;
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const r = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592);
  const g =
    t <= 66
      ? 99.4708025861 * Math.log(t) - 161.1195681661
      : 288.1221695283 * Math.pow(t - 60, -0.0755148492);
  const b =
    t >= 66
      ? 255
      : t <= 19
        ? 0
        : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  return [clamp(r), clamp(g), clamp(b)];
}

export function WarmthDial() {
  const id = useId();
  const [kelvin, setKelvin] = useState(2700);
  const ember = kelvin < EMBER_BELOW;
  const [r, g, b] = ember ? EMBER : kelvinToRgb(kelvin);
  const light = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.5;

  return (
    <div
      className="dial"
      style={{
        background: `rgb(${r} ${g} ${b})`,
        color: light ? '#141317' : '#f4f1ea',
      }}
    >
      <p className="dial__readout display" aria-hidden="true">
        {ember ? 'Ember' : `${Math.round(kelvin / 100) * 100} K`}
      </p>
      <div className="dial__control">
        <label htmlFor={id}>Turn the warmth, like the app&apos;s dial</label>
        <input
          id={id}
          className="dial-range"
          type="range"
          min={MIN}
          max={MAX}
          step={100}
          value={kelvin}
          onChange={e => setKelvin(Number(e.target.value))}
          aria-valuetext={ember ? 'Ember red' : `${kelvin} kelvin`}
        />
        <div className="dial__scale" aria-hidden="true">
          <span>Ember</span>
          <span>Candle</span>
          <span>Daylight</span>
        </div>
      </div>
    </div>
  );
}

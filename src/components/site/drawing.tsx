'use client';

import { motion } from 'framer-motion';
import type { LineIconKind } from '@/types';

const ease = [0.23, 1, 0.32, 1] as const;

/** Line drawing: a server rack wired to a game controller. */
export function RackToController({ color = '#f2f1ec' }: { color?: string }) {
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1.6, ease, delay },
  });
  const stroke = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <svg
      viewBox="80 20 680 260"
      className="h-auto w-full"
      aria-label="A server rack connected by a cable to a game controller"
      role="img"
    >
      <motion.path {...stroke} {...draw(0.1)} d="M120 70 h140 v180 h-140 Z" />
      <motion.path
        {...stroke}
        {...draw(0.2)}
        d="M120 70 l40 -26 h140 l-40 26"
      />
      <motion.path
        {...stroke}
        {...draw(0.3)}
        d="M260 70 l40 -26 v180 l-40 26"
      />
      {[110, 150, 190, 230].map((y, i) => (
        <motion.path
          key={y}
          {...stroke}
          {...draw(0.35 + i * 0.08)}
          d={`M136 ${y} h86`}
        />
      ))}
      {[100, 140, 180, 220].map((y, i) => (
        <motion.circle
          key={y}
          cx={244}
          cy={y}
          r={4}
          fill={color}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0.35, 1] }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 1 + i * 0.2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}
      <motion.path
        {...stroke}
        {...draw(0.8)}
        d="M300 168 C 380 168, 420 238, 520 206"
      />
      <circle className="site-packet" r="5" fill={color} />
      <motion.path
        {...stroke}
        {...draw(1)}
        d="M540 160 C540 128 562 116 594 116 H676 C706 116 728 128 728 160 C728 212 748 252 716 258 C694 262 684 232 668 216 H600 C584 232 574 262 552 258 C520 252 540 212 540 160 Z"
      />
      <motion.path
        {...stroke}
        {...draw(1.3)}
        d="M574 158 h12 v-12 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 Z"
      />
      {[
        [670, 150],
        [688, 166],
        [652, 166],
        [670, 182],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          {...stroke}
          cx={cx}
          cy={cy}
          r={7}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 1.4 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}

/** Small line illustrations for projects without a screenshot. */
export function LineIcon({ kind }: { kind: LineIconKind }) {
  const s = {
    fill: 'none',
    stroke: '#f4f1ea',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const draw = {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 1.4, ease },
  };
  return (
    <svg viewBox="0 0 200 120" className="h-[62%] w-auto" aria-hidden>
      {kind === 'lamp' && <FoldingPhone />}
      {kind === 'chart' && (
        <>
          <motion.path {...s} {...draw} d="M30 100 h150 M30 100 V20" />
          <motion.path
            {...s}
            {...draw}
            d="M34 92 C 70 88, 90 60, 120 50 S 160 26, 176 24"
          />
          <motion.path
            {...s}
            {...draw}
            d="M34 96 C 70 94, 95 72, 124 64 S 160 44, 176 40"
            strokeDasharray="4 5"
          />
        </>
      )}
      {kind === 'route' && (
        <>
          <motion.rect
            {...s}
            {...draw}
            x="20"
            y="30"
            width="60"
            height="50"
            rx="6"
          />
          <motion.rect
            {...s}
            {...draw}
            x="120"
            y="30"
            width="60"
            height="50"
            rx="6"
          />
          <motion.path {...s} {...draw} d="M84 55 h30 m-8 -7 l8 7 l-8 7" />
          <motion.path {...s} {...draw} d="M20 42 h60 M120 42 h60" />
        </>
      )}
      {kind === 'graph' && (
        <>
          {[
            [40, 30],
            [100, 20],
            [160, 40],
            [60, 90],
            [130, 95],
          ].map(([cx, cy], i) => (
            <motion.circle key={i} {...s} {...draw} cx={cx} cy={cy} r={8} />
          ))}
          <motion.path
            {...s}
            {...draw}
            d="M47 34 L92 22 M107 24 L152 38 M44 38 L58 82 M68 90 L122 94 M106 27 L128 88 M154 47 L136 88"
          />
        </>
      )}
      {kind === 'stack' && (
        <>
          {/* Events arriving and stacking up in order */}
          <motion.rect
            {...s}
            {...draw}
            x="60"
            y="74"
            width="80"
            height="18"
            rx="5"
          />
          <motion.rect
            {...s}
            {...draw}
            x="60"
            y="50"
            width="80"
            height="18"
            rx="5"
          />
          <motion.rect
            {...s}
            {...draw}
            x="60"
            y="26"
            width="80"
            height="18"
            rx="5"
          />
          <motion.path {...s} {...draw} d="M24 35 h26 m-7 -6 l7 6 l-7 6" />
          <motion.path {...s} {...draw} d="M150 83 h26 m-7 -6 l7 6 l-7 6" />
        </>
      )}
      {kind === 'hex' && (
        <>
          {/* A hexagon of linked nodes */}
          <motion.path
            {...s}
            {...draw}
            d="M100 14 L148 40 L148 88 L100 114 L52 88 L52 40 Z"
          />
          <motion.path
            {...s}
            {...draw}
            d="M100 14 L52 88 M100 14 L148 88 M52 88 L148 88"
          />
          {[
            [100, 14],
            [148, 40],
            [148, 88],
            [100, 114],
            [52, 88],
            [52, 40],
          ].map(([cx, cy], i) => (
            <motion.circle key={i} {...s} {...draw} cx={cx} cy={cy} r={5} />
          ))}
        </>
      )}
    </svg>
  );
}

/**
 * Reading Light: a foldable phone lying closed, its top half swings open on
 * the hinge, then the inner screen glows warm and the light spills down.
 */
function FoldingPhone() {
  const line = {
    fill: 'none',
    stroke: '#f4f1ea',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const warm = '#ffc483';
  const view = { once: true, margin: '-40px' };
  return (
    <svg viewBox="0 0 200 120" className="h-[66%] w-auto" aria-hidden>
      <defs>
        <filter id="rl-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* Warm glow behind the open screen */}
      <motion.ellipse
        cx="100"
        cy="54"
        rx="34"
        ry="40"
        fill={warm}
        filter="url(#rl-glow)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={view}
        transition={{ duration: 1, ease, delay: 1.3 }}
      />

      {/* Light falling on the lower half */}
      <motion.ellipse
        cx="100"
        cy="94"
        rx="30"
        ry="6"
        fill={warm}
        filter="url(#rl-glow)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={view}
        transition={{ duration: 1, ease, delay: 1.5 }}
      />

      {/* Lower half, lying flat */}
      <motion.path
        {...line}
        d="M72 103 H128 Q131 103 129 100 L121 87 Q120 85 117 85 H83 Q80 85 79 87 L71 100 Q69 103 72 103 Z"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={view}
        transition={{ duration: 0.9, ease }}
      />

      {/* Upper half swings up from the hinge */}
      <motion.g
        style={{ originX: 0.5, originY: 1 }}
        initial={{ scaleY: 0.04 }}
        whileInView={{ scaleY: 1 }}
        viewport={view}
        transition={{ type: 'spring', duration: 1.1, bounce: 0.15, delay: 0.5 }}
      >
        <rect {...line} x="77" y="19" width="46" height="66" rx="11" />
        <motion.rect
          x="81"
          y="23"
          width="38"
          height="58"
          rx="8"
          fill={warm}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.92 }}
          viewport={view}
          transition={{ duration: 0.8, ease, delay: 1.3 }}
        />
        <rect {...line} x="81" y="23" width="38" height="58" rx="8" />
        {/* Camera */}
        <circle cx="100" cy="28" r="1.7" fill="#1b1a20" />
      </motion.g>

      {/* Hinge */}
      <path {...line} d="M79 85 H121" strokeWidth={2.4} />
    </svg>
  );
}

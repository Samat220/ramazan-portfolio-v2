import { useSmoothScroll } from '@/hooks';

export function useNavigationHandlers(headerHeight: number = 80) {
  const { scrollToElement } = useSmoothScroll();

  const handleLinkClick = (
    e: React.MouseEvent,
    href: string,
    onClose?: () => void
  ) => {
    e.preventDefault();

    if (
      href.startsWith('http') ||
      (href.startsWith('/') && !href.startsWith('/#'))
    ) {
      window.open(href, href.includes('.pdf') ? '_blank' : '_self');
      return;
    }

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      scrollToElement(targetId, headerHeight);
    }

    onClose?.();
  };

  return { handleLinkClick };
}

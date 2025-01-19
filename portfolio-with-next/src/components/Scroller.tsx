import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className: string
  trackIds: string[]
  onScrollToElement: (trackedEl: HTMLElement) => void
}

export function Scroller({
  className,
  children,
  trackIds,
  onScrollToElement
}: Props) {
  return (
    <div
      className={className}
      onScroll={(e) => {
        for (let i = 0; i <= trackIds.length - 1; i++) {
          const id = trackIds[i]
          const trackedEl = document.getElementById(id)
          const scrollerEl = e.currentTarget

          if (
            trackedEl &&
            scrollerEl.scrollTop >
              trackedEl.offsetTop +
                trackedEl.offsetHeight -
                scrollerEl.offsetHeight
          ) {
            onScrollToElement(trackedEl)
          }
        }
      }}
    >
      {children}
    </div>
  )
}

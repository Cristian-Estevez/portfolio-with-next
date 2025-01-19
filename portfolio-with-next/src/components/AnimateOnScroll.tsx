'use client'

import {
  type PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react'

type Props = PropsWithChildren<{
  reappear?: boolean
  threshold?: number
}>

type Options = {
  threshold: number
  reappear?: boolean
}

const useElementOnScreen = (
  options: Options
): [RefObject<HTMLDivElement | null>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const makeAppear = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) setIsVisible(true)
  }

  const makeAppearRepeating = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const callBack = options.reappear ? makeAppearRepeating : makeAppear

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    const observer = new IntersectionObserver(callBack, options)
    if (containerRefCurrent) observer.observe(containerRefCurrent)

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent)
      }
    }
  }, [containerRef, options, callBack])

  return [containerRef, isVisible]
}

export function AnimateOnScroll({
  children,
  reappear,
  threshold = 0.5
}: Props) {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear
  })

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-1000 ${
          isVisible
            ? 'opacity-100 blur-none translate-x-0'
            : 'opacity-0 blur-lg -translate-x-20'
        }  motion-reduce:transition-none motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  )
}

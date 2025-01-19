import { AnimateOnScroll, AppAppBar, ScrollTop } from '@/components'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { Box, Container, Fab } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <nav>
        <AppAppBar />
      </nav>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <AnimateOnScroll>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(12)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </AnimateOnScroll>
        <ScrollTop>
          <Fab
            size='small'
            aria-label='scroll back to top'
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva('', {
  variants: {
    typography: {
      t1: 'text-[30px] leading-[1.35]',
      t2: 'text-[26px] leading-[1.34]',
      t3: 'text-[22px] leading-[1.4]',
      t4: 'text-[20px] leading-[1.45]',
      t5: 'text-[17px] leading-[1.5]',
      t6: 'text-[15px] leading-[1.5]',
      t7: 'text-[13px] leading-[1.5]',
    },
    color: {
      black: 'text-black-600',
      red: 'text-red-600',
      green: 'text-green-600',
      blue: 'text-blue-600',
      orange: 'text-orange-600',
    },
    display: {
      inline: 'inline',
      block: 'block',
      inlineBlock: 'inline-block',
      inlineFlex: 'inline-flex',
      flex: 'flex',
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    fontWeight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    typography: 't5',
    color: 'black',
    display: 'inline',
    fontWeight: 'normal',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode
}

const Text = ({
  typography,
  color,
  display,
  textAlign,
  fontWeight,
  // bold,
  // className,
  children,
}: TextProps) => {
  return (
    <span
      className={cn(
        textVariants({ typography, color, display, textAlign, fontWeight }),
      )}
    >
      {children}
    </span>
  )
}

export default Text

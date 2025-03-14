import { BeforeEach, Errback, EvalScripts } from '@tanem/svg-injector'
import * as React from 'react'

interface BaseProps {
  [key: string]: unknown
  afterInjection?: Errback
  beforeInjection?: BeforeEach
  evalScripts?: EvalScripts
  fallback?: React.ReactType
  httpRequestWithCredentials?: boolean
  loading?: React.ReactType
  renumerateIRIElements?: boolean
  src: string
  useRequestCache?: boolean
  wrapper?: 'div' | 'span' | 'svg'
}

type HTMLWrapperType = HTMLSpanElement | HTMLDivElement
type SVGWrapperType = SVGSVGElement

export type WrapperType = HTMLWrapperType | SVGWrapperType

export type Props = BaseProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLWrapperType>,
    HTMLWrapperType
  > &
  React.SVGProps<SVGWrapperType>

export interface State {
  hasError: boolean
  isLoading: boolean
}

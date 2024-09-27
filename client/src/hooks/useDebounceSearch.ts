/* eslint-disable react-hooks/exhaustive-deps */
import React, {ChangeEvent, useCallback} from 'react'
import {debounce} from 'lodash'

interface IFn {
  setText: React.Dispatch<React.SetStateAction<string>>
  timeout?: number
}

type TReturn = (event: ChangeEvent<HTMLInputElement>) => void

export const useDebounceSearch = ({setText, timeout = 1000}: IFn): TReturn => {
  const handleDebounceFn = (text: string) => {
    setText(text)
  }

  const debounsFn = useCallback(debounce(handleDebounceFn, 2000), [])

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    debounsFn(event.target.value.trim())
  }

  return search
}

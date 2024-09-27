export interface IInputData<T> {
  label: string
  inputName: T
  password?: boolean
  leftAddon?: string
}

export interface IInputData1<T> {
  label: {
    ru: string
    en: string
  }
  inputName: T
  password?: boolean
  leftAddon?: string
}

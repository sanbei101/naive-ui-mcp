# 脱离上下文的 API（v2.29.0）

如果你想在 `setup` 外使用 `useDialog`、`useMessage`、`useNotification`、`useLoadingBar`，`useModal`，可以通过 `createDiscreteApi` 来构建对应的 API。

## API

### createDiscreteApi

```ts
function createDiscreteApi(
  includes: Array<'message' | 'dialog' | 'notification' | 'loadingBar'>,
  options: {
    configProviderProps: Ref<ConfigProviderProps> | ConfigProviderProps
    messageProviderProps: Ref<MessageProviderProps> | MessageProviderProps
    dialogProviderProps: Ref<DialogProviderProps> | DialogProviderProps
    notificationProviderProps: Ref<NotificationProps> | NotificationProps
    loadingBarProviderProps:
      | Ref<LoadingBarProviderProps>
      | LoadingBarProviderProps
  }
): {
  // 只有 includes 中包含的 API 才会被创建
  message: MessageApi
  dialog: DialogApi
  notification: NotificationApi
  loadingBar: LoadingBarApi
  // Vue app
  app: App
  unmount: () => void
} {}
```

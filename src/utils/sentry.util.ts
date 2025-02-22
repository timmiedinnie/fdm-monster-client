import * as Sentry from "@sentry/vue";

export function setSentryEnabled(enabled: boolean) {
  const client = Sentry.getCurrentHub().getClient();
  // @ts-ignore
  client.getOptions().enabled = enabled;
  console.warn("Sentry enabled:", enabled);
}

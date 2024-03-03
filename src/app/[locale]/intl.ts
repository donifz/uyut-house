'server-only';

import { createIntl } from '@formatjs/intl';
import { MessageFormatElement } from 'react-intl';

const getMessages = async (
  locale: string
): Promise<Record<string, MessageFormatElement[]> | Record<string, string>> => {

    try {
        return (await import(`@/lang/${locale}.json`)).default;
    } catch (e) {
        return (await import(`@/lang/en.json`)).default
    }

};

export default async function getIntl(locale: string) {
  return createIntl({
    locale: locale,
    messages: await getMessages(locale)
  });
}
import { getApps } from '~/apps';
import kebabize from '~/shared/utils/kebabize'

const TAG_PROJECT = "cp";

const getTagName = (componentName) => {
  return TAG_PROJECT + "-" + kebabize(componentName);
};

getApps().forEach(app => {
  const tagName = getTagName(app.name);

  if (!customElements.get(tagName)) {
    customElements.define(tagName, app);
  }
});
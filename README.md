# Create TS FC React Component
  This is an extension which create a ts fc component like below:
  ```tsx
  import React, { FC } from 'react';
export interface ComponentNameProps {

}
const ComponentName: FC = () => {
  return (
    <div>
      Hello ComponentName
    </div>
  );
};

export default ComponentName;
  ```
  ![createcomponent](https://files.catbox.moe/exompf.gif)
  now only supporting one naming type like **component-name**, it can be created by snippets `rtfc`
  ![createcomponent](https://files.catbox.moe/ittt7h.gif)

And also supporting some antd component and ahooks snippets
 ![createcomponent](https://files.catbox.moe/pio3r8.gif)
  ![createcomponent](https://files.catbox.moe/dfuejc.gif)
``
## ahooks snippets
Prefix|Snippet
---|:--:
ui|useInterval
uto|useTimeout
ub|useBoolean
uls|useLocalStorageState
usz|useSize

## antd component snippets
Prefix | Snippets
---|:--:
umv | const [ModalVisible, setModalVisible] = useState<boolean>(false);
amodal|antd modal component
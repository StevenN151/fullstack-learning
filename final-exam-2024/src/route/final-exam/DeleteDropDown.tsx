import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import styles from './index.module.css';

export function DeleteDropdown({ onDeleteAll, onDeleteDone }) {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button danger onClick={onDeleteAll}>
          Delete All
        </Button>
      ),
    },

    {
      key: '2',
      label: <Button onClick={onDeleteDone}>Delete Done</Button>,
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img
              className={styles.imgDelete}
              src="https://www.svgrepo.com/show/502614/delete.svg"
            />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

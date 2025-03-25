import { Input, Modal } from 'antd';
import { useState } from 'react';
import styles from './index.module.css';

export function AddTaskModal({ isVisible, setIsVisible, addTask }) {
  const [title, setTitle] = useState<any>('');
  const [description, setDescription] = useState<any>('');

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, description, done: false, tag });
    setTitle('');
    setDescription('');
    setIsVisible(false);
  };

  return (
    <Modal
      className={styles.modal}
      title="Add Task"
      visible={isVisible}
      onOk={handleAdd}
      onCancel={() => setIsVisible(false)}
    >
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginTop: 10 }}
      ></Input>
    </Modal>
  );
}

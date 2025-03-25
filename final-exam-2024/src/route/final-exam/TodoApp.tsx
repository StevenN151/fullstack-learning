import { useState } from 'react';
import { Button } from 'antd';
import { Search } from './Search';
import { DeleteDropdown } from './DeleteDropDown';
import { TagList } from './TagList';
import { AddTaskModal } from './AddTaskModal';
import styles from './index.module.css';

export function TodoApp() {
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [tags, setTags] = useState<Array<any>>([]);
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [selectedTags, setSelectedTags] = useState<Array<any>>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSearchQueryValueChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onDeleteAll = () => {
    setTasks([]);
  };

  const onDeleteDone = () => {
    setTasks(tasks.filter((task) => !task.done));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className={styles.container}>
      <TagList
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <div className={styles.taskWrapper}>
        <div className={styles.taskContent}>
          <Search onChange={onSearchQueryValueChange} value={searchQuery} />
          <DeleteDropdown
            onDeleteAll={onDeleteAll}
            onDeleteDone={onDeleteDone}
          />
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            +
          </Button>
          <AddTaskModal
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
            addTask={addTask}
          />
        </div>

        <div>
          <img
            className={styles.imgTask}
            src="https://gally-list.netlify.app/static/media/no-data-2.c1e360bc.png"
          />
        </div>
      </div>
    </div>
  );
}

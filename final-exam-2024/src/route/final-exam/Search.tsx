import { Input } from 'antd';

export function Search({ onChange, value }) {
  return <Input placeholder="Search tasks" value={value} onChange={onChange} />;
}

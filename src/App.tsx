import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: <Button onClick={() => { navigate('/form-demo'); }} type="link">item 1</Button>,
      key: '1'
    },
    {
      label: <Button onClick={() => { navigate('/others'); }} type="link">item 2</Button>,
      key: '2'
    }
  ];
  return (
    <Menu items={items}/>
  );
};

export default App;

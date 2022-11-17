import styles from './index.module.less';
import { Spin } from 'antd';

const ScreenLoading = () => {
  return (
    <div className={styles.ScreenLoading}>
      <Spin size="large"/>
    </div>
  );
};

export default ScreenLoading;

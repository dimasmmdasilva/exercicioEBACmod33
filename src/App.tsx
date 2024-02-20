import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="owl-butterfly-3216494_640.jpg">
        O que você sabe sobre essa borboleta?
      </Post>
    </div>
  );
}

export default App;

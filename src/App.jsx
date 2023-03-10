import logo from './logo.svg';
import styles from './App.module.css';
import TodoComponent from './components/Todo';

function App() {
  return (
    <div class={styles.App}>
        <TodoComponent />
    </div>
  );
}

export default App;

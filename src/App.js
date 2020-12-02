import './App.css';
import useCommentsFetcher from './useCommentsFetcher';

function App() {

  const fetcher = useCommentsFetcher(4);

  return (
    <div className="App">
      {fetcher.map(comment => <div>id is {comment.id} <br/>{comment.name}</div>)}
    </div>
  );
}

export default App;

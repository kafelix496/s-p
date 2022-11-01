import InputForm from'./InputForm'
import ResourceList from './ResourceList'
import { useResources } from './hooks/resoureList'

function App () {
  const { list, addList, deleteListItem } = useResources()

  return (
    <>
      <header style={{ padding: 0 }}>
        <h1 style={{ fontSize: '2em' }}>Resource Tracker</h1>
      </header>
      <main>
        <InputForm addList={addList} />
        <ResourceList list={list} deleteListItem={deleteListItem} />
      </main>
    </>
  );
}

export default App;

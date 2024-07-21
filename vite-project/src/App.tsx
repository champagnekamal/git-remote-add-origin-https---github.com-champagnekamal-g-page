
import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
function App() {

    const [data, setData] = useState<any[]>([]);
    const [isLoading1, setIsLoading1] = useState(false);

    const fetchUser = async () => {
      setIsLoading1(true); // Set loading state
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Update state with fetched data
        return result
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading1(false); // Clear loading state
      }
    };

    const { isLoading } = useQuery(
      {
        queryKey: ['repodata'],
        queryFn: fetchUser,       
        enabled: true, // Disable automatic fetch on mount
        staleTime: 5000,
    
        }
    
    );

isLoading && console.log("isLoading", isLoading)

  console.log(data);
  return (
    <>
      <div>
      {/* <button onClick={handleClick} disabled={isLoading1}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button> */}
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
    </div>

    </>
  )
}

export default App

import { Route, Routes, Link } from "react-router-dom"
import  Home  from "./Home"
import BookList  from "./BookList"
import Book from "./Book"
import NewBook from "./NewBook"
import BookLayout from "./BookLayout"
import NotFound from "./NotFound"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
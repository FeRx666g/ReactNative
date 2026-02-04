/* import { BasicFunctions } from './typescript/BasicFunctions' */
/* import { ObjectLiterals } from './typescript/ObjectLiterals' */
/* import BasicTypes from './typescript/BasicTypes'*/
/* import { Counter } from "./components/Counter"*/
/* import { LoginPage } from "./components/LoginPage" */
import { AuthProvider } from "./context/AuthContext"
/* import { UsersPage } from "./components/UsersPage" */
import { FormsPage } from "./components/FormsPage"

function App() {

  return (
    <>
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-3xl0 mb-5 ">
          React + TypeScript
        </h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
    </>
  )
}

export default App

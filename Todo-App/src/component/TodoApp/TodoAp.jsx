import Header from "../HeaderTodo/Header.jsx";
import TodoLogic from "../TodoLogic/TodoLogic.jsx";
import styles from './todoAp.module.scss'
import CenteredButton from "../CenteredButton.jsx";
import Layout from "../Layout/Layout.jsx";


const TodoAp = () => {
    return (
        <div className={styles.main}>
            <Layout>
            <Header/>
            <TodoLogic/>
            </Layout>
            <CenteredButton>
                Log in
            </CenteredButton>
        </div>
    )
}
export default TodoAp
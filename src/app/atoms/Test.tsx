import * as React from "react";

/**
 * Интерфейс
 */
interface ITest {
    /** Заголовок */
    title:string;
    /** Подзаголовок */
    subtitle?:string;
    /** Выделено или нет */
    accented?:boolean;
    /** Элемент */
    item:ITestItem;
}

interface ITestItem {
    title:string;
}

/**
 * Компонент
 */
export default class Test extends React.Component<ITest, any>{
    public render() {
        return <div>Test!</div>;
    }
}

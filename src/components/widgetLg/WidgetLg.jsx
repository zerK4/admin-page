import React from 'react'
import './WidgetLg.css'
import Avatar1 from "../../img/1.jpg"

export default function WidgetLg() {

    const Button = ({type}) =>{
        return (<button className={"widgetLgButton " + type}>{type}</button>)
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgeetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar1} alt="Avatar" className='widgetLgImage' />
                        <span className="widgetLgName">Carol the First</span>
                    </td>
                    <td className="widgetLgDate">2nd June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar1} alt="Avatar" className='widgetLgImage' />
                        <span className="widgetLgName">Carol the First</span>
                    </td>
                    <td className="widgetLgDate">2nd June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar1} alt="Avatar" className='widgetLgImage' />
                        <span className="widgetLgName">Carol the First</span>
                    </td>
                    <td className="widgetLgDate">2nd June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar1} alt="Avatar" className='widgetLgImage' />
                        <span className="widgetLgName">Carol the First</span>
                    </td>
                    <td className="widgetLgDate">2nd June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar1} alt="Avatar" className='widgetLgImage' />
                        <span className="widgetLgName">Carol the First</span>
                    </td>
                    <td className="widgetLgDate">2nd June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

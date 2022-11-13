import React from 'react';
import styles from './log.module.css';

export class Log extends React.Component<{ records: any[] }> {
  override render() {
    return <>
      <table className={`${styles.fullWidth ?? ''} pure-table`}>
        <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.records.map(record =>
            <tr>
              <th>{record.date}</th>
              <th>{record.type}</th>
              <th>{record.amount}</th>
            </tr>)
        }
        </tbody>
      </table>
    </>;
  }
}
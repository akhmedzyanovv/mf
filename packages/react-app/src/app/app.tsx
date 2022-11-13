import styles from './app.module.css';
import React from 'react';
import { Tree } from '../components/tree/tree';
import { Log } from '../components/log/log';

//TODO exclude type to lib
export class App extends React.Component<{}, { stage: number, records: any[] }> {

  override componentDidMount(): void {
    this.updateState();

    if (typeof window != 'undefined') {
      window.addEventListener('storage', (e: Event) => {
        this.updateState();
      });
    }
  }

  private updateState(): void {
    this.setState({
      records: JSON.parse(localStorage.getItem('recycling') ?? '[]'),
      stage: this.calculateStage()
    });
  }

  private calculateStage(): number {
    return Math.floor(Math.random() * 9 + 1);
  }

  override render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.tree}>
            <Tree stage={this.state?.stage ?? 1} />
          </div>
          <div className={styles.log}>
            <Log records={this.state?.records ?? []} />
          </div>
        </div>
      </>
    );
  }
}

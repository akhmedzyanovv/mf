import styles from './tree.module.css';
import React from 'react';
import { TreeImg } from '../../assets/images';

const stageToImageMap: Map<number, string> = new Map<number, string>([
  [1, TreeImg.stage_1],
  [2, TreeImg.stage_2],
  [3, TreeImg.stage_3],
  [4, TreeImg.stage_4],
  [5, TreeImg.stage_5],
  [6, TreeImg.stage_6],
  [7, TreeImg.stage_7],
  [8, TreeImg.stage_8],
  [9, TreeImg.stage_9],
  [10, TreeImg.stage_10]
]);

export class Tree extends React.Component<{ stage: number }> {
  override render(): JSX.Element {
    return <div className={styles.tree_container}>
      <img src={stageToImageMap.get(this.props.stage)}></img>
    </div>;
  }
}
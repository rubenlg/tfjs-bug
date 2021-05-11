import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs-node-gpu';

async function main() {
  const sentenceModel = await use.load();
  const model = tf.sequential();
  model.add(tf.layers.dense({
    units: 16,
    activation: 'sigmoid',
    inputShape: [3],
  }));
}
main();
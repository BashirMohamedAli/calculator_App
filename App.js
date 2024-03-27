import React, {useState} from 'react';
import {View, Text, useColorScheme, StatusBar} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import darkStyles from './constants/themes/DarkStyles';
import lightStyles from './constants/themes/LightStyles';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  let colorScheme = useColorScheme();
  const styles = colorScheme === 'light' ? lightStyles : darkStyles;

  const handleButtonPress = value => {
    if (value === '=') {
      try {
        // Replace '×' with '*' and '÷' with '/'
        const expressionToEvaluate = expression
          .replace(/×/g, '*')
          .replace(/÷/g, '/');
        setResult(eval(expressionToEvaluate).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else {
      // Append the appropriate symbol for division and multiplication
      if (value === '÷') {
        setExpression(expression + '÷');
      } else if (value === '×') {
        setExpression(expression + '*');
      } else {
        setExpression(expression + value);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.pad}>
        <View style={styles.row}>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={styles.button}
            onPress={() => handleButtonPress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableScale>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={styles.button}
            onPress={() => handleButtonPress('DEL')}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableScale>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={styles.button}
            onPress={() => handleButtonPress('%')}>
            <Text style={{...styles.buttonText, fontSize: 28}}>%</Text>
          </TouchableScale>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={{...styles.button, backgroundColor: '#d256eb'}}
            onPress={() => handleButtonPress('÷')}>
            <Text style={{...styles.buttonText, color: '#fff', fontSize: 32}}>
              ÷
            </Text>
          </TouchableScale>
        </View>
        <View style={styles.row}>
          {[7, 8, 9, '×'].map(value => (
            <TouchableScale
              key={value}
              friction={5}
              activeScale={0.9}
              style={styles.button}
              onPress={() => handleButtonPress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableScale>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6, '-'].map(value => (
            <TouchableScale
              key={value}
              friction={5}
              activeScale={0.9}
              style={styles.button}
              onPress={() => handleButtonPress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableScale>
          ))}
        </View>
        <View style={styles.row}>
          {[1, 2, 3, '+'].map(value => (
            <TouchableScale
              key={value}
              friction={5}
              activeScale={0.9}
              style={styles.button}
              onPress={() => handleButtonPress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableScale>
          ))}
        </View>
        <View style={styles.row}>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={{...styles.button, flex: 2, aspectRatio: 2}}
            onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableScale>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={styles.button}
            onPress={() => handleButtonPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableScale>
          <TouchableScale
            friction={5}
            activeScale={0.9}
            style={{...styles.button, backgroundColor: '#32d389'}}
            onPress={() => handleButtonPress('=')}>
            <Text style={{...styles.buttonText, color: '#fff', fontSize: 32}}>
              =
            </Text>
          </TouchableScale>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

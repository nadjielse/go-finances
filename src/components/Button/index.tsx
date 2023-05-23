import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import THEMES from '../../global/styles/theme';

import {styles} from './styles';

interface Props extends TouchableOpacityProps{
  title:string;
  cor?:boolean;
}

export function Button({title,cor,...rest}:Props){
  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      style ={[styles.button,
        {backgroundColor:cor? THEMES.colors.secondary:THEMES.colors.shape}]}
     {...rest}
    >
      <Text
        style ={[styles.titleButton,{color:cor? THEMES.colors.shape:THEMES.colors.text_dark,}]} 
      >
       {title}
      </Text>
    </TouchableOpacity>
  );
}
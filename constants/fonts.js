import {Platform} from 'react-native';

export const FONTS = {
  ...Platform.select({
    ios: {
      QUICKSANDBOLD: 'Quicksand-Bold',
      QUICKSANDBOLD_REGULAR: 'Quicksand-Regular',
      QUICKSAND_SEMIBOLD: 'Quicksand-SemiBold',
    },
    android: {
      QUICKSANDBOLD: 'QuicksandBold',
      QUICKSANDBOLD_REGULAR: 'QuicksandRegular',
      QUICKSAND_SEMIBOLD: 'Quicksand-SemiBold',
    },
  }),
};
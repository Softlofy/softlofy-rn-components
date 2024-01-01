import SVGs from '../assets';
import useColors from '../contexts/ColorContext/useColors';

export type TSnackBarVariant = 'success' | 'error' | 'warning' | 'info';

const useSnackBarColorAndIcon = (variant: TSnackBarVariant) => {
  const colors = useColors();

  const color = () => {
    switch (variant) {
      case 'success':
        return colors.green;
      case 'error':
        return colors.red;
      case 'warning':
        return colors.orange;
      case 'info':
        return colors.sky;

      default:
        return colors.blue;
    }
  };
  const icon = () => {
    switch (variant) {
      case 'success':
        return SVGs.Check(24, 24, colors.white);
      case 'error':
        return SVGs.Warning(24, 24, colors.white);
      case 'warning':
        return SVGs.Warning(24, 24, colors.white);
      case 'info':
        return SVGs.Info(24, 24, colors.white);

      default:
        return SVGs.Info(24, 24, colors.white);
    }
  };

  return {color: color(), icon: icon()};
};

export default useSnackBarColorAndIcon;

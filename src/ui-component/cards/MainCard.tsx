import PropTypes from 'prop-types';
import {forwardRef, ReactNode} from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// constant
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //
interface MainCardProps {
    border?: boolean;
    boxShadow?: boolean;
    children?: React.ReactNode;
    content?: boolean;
    contentClass?: string;
    contentSX?: React.CSSProperties;
    darkTitle?: boolean;
    secondary?: React.ReactNode | string | object;
    shadow?: string;
    sx?: React.CSSProperties;
    title?: React.ReactNode | string | object;
};

const formatTitle = (title: React.ReactNode | string | object): React.ReactNode => {
    if (typeof title === 'string' || typeof title === 'number') {
        return (
            <Typography variant="body1" component="div">
                {title}
            </Typography>
        );
    } else {
        return title as ReactNode;
    }
};
const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.primary.main + 25,
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
          },
          ...sx
        }}
      >
        {/* card header and action */}
        {title && <CardHeader
            sx={headerSX}
            title={
                darkTitle ? (
                    <Typography variant="h3" component="div">
                        {title as ReactNode}
                    </Typography>
                ) : (
                    title as React.ReactNode
                )
            }
            action={secondary as ReactNode}
        />}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MainCard;

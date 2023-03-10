import React from 'react';
import {
  Stack, styled, Paper as MuiPaper,
} from '@mui/material';

export const PageLayout = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.sm,
  },
}));

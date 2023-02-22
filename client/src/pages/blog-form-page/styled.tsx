import React from 'react';
import {
  Stack, styled, Paper as MuiPaper, PaperProps,
} from '@mui/material';

export const PageLayout = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

const PaperForm = (props: Omit<PaperProps<'form'>, 'form'>) => <MuiPaper component="form" elevation={6} {...props} />;

export const Paper = styled(PaperForm)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.sm,
  },
}));

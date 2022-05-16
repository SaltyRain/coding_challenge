import { Fragment, ReactElement } from "react";
import { Card, Typography, } from '@mui/material';
import { Startup } from "../../Types/Startup";

export default function StartupListItem(props: Startup): ReactElement {
  return <Fragment>
    <Card sx={{
      p: 2,
      mb: 2
    }}>
      <Typography variant={'h5'} component={'h3'}>{props.name}</Typography>
      <Typography component={'span'} sx={{
        color: '#4f4f4f',
        fontSize: '0.9em',
      }}>
        {`Founded: ${props.dateFounded.getFullYear()} | ${props.employees} Employees | ${props.totalFunding}$ | ${props.currentInvestmentStage}`}
      </Typography>
      <Typography mt={2}>{props.shortDescription}</Typography>
    </Card>
  </Fragment>;
}
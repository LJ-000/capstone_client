// import React from 'react'

// () => {
    // import { createDateAPI, Calendar, CalendarProvider, useCalendarDispatch, useCalendarState, Root } from "@use-date-input/core";
    // import { adapter as dateAdapter } from "@use-date-input/date-fns-adapter";
    // import { makeStyles } from '@material-ui/core/styles';
    // import List from '@material-ui/core/List';
    // import ListItem from '@material-ui/core/ListItem';
    // import ListItemText from '@material-ui/core/ListItemText';
//     const theme = useTheme()
//     const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))
//     const numOfColumns = isSmallBreakpoint ? 2 : 4
//     const numOfVisibleMonths = isSmallBreakpoint ? 2 : 12
//     const ShortcutList = () => {
//       const dateAPI = createDateAPI({ adapter: dateAdapter })
//       const useStyles = makeStyles(theme => ({
//         root: {
//           backgroundColor: theme.palette.background.paper,
//           color: theme.palette.primary.main,
//           display: 'inline-block',
//           marginTop: '40px',
//           verticalAlign: 'top',
//           width: 150,
//         },
//       }))
//       const { startDate } = useCalendarState()
//       const { setEndDate, setVisibleFromDate } = useCalendarDispatch()
//       const classes = useStyles()
//       if (!startDate) {
//         return null
//       }
//       const createNightsSelectHandler = numOfNights => () => {
//         setEndDate(dateAPI.addDays(startDate, numOfNights))
//         setVisibleFromDate(dateAPI.startOfMonth(startDate))
//       }
//       const handleTenNights = createNightsSelectHandler(10)
//       const handleSevenNights = createNightsSelectHandler(7)
//       const handleThreeNights = createNightsSelectHandler(3)
//       return (
//         <div className={classes.root}>
//           <List component="nav" dense aria-label="date range shortcuts">
//             <ListItem button onClick={handleTenNights}>
//               <ListItemText primary="Stay for 10 nights" />
//             </ListItem>
//             <ListItem button onClick={handleSevenNights}>
//               <ListItemText primary="Stay for 7 nights" />
//             </ListItem>
//             <ListItem button onClick={handleThreeNights}>
//               <ListItemText primary="Stay for 3 nights" />
//             </ListItem>
//           </List>
//         </div>
//       )
//     }
//     const CustomRoot = props => (
//       <div>
//         <ShortcutList />
//         <Root {...props} />
//       </div>
//     )
//     return (
//       <Calendar
//         adapter={dateAdapter}
//         allowRange
//         components={{
//           Header: DemoHeader,
//           Root: CustomRoot,
//         }}
//         numOfVisibleMonths={numOfVisibleMonths}
//         numOfColumns={numOfColumns}
//       />
//     )
//   }

// export default Calendar 



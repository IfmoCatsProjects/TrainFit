import React, {useState} from 'react';
import {Header} from "../Header";
import {CalendarGrid} from "../CalendarGrid";
import {Monitor} from "../Monitor";
import moment from "moment";
import styled from "styled-components";
import AppSchedule from "../../components/appSchedule/script";

const ShadowWrapper = styled('div')`
  border-top: 1px solid #C5C5C5;
  border-left: 1px solid #B5B7B9;
  border-right: 1px solid #B5B7B9;
  border-bottom: 2px solid #A4A5A7;
  border-radius: 8px;
  overflow:hidden;
  box-shadow: 0 0 0 1px #CACACA, 0 8px 20px 6px #D5D5D5;
  display: flex;
  flex-direction: column;
`;
function Schedule() {
    moment.updateLocale('en',{week:{dow:1}})
    const today = moment();
    const startDay = today.clone().startOf('month').startOf('week');
    return (
        <AppSchedule>
            <ShadowWrapper>
                <Header/>
                <Monitor today={today}/>
                <CalendarGrid startDay={startDay}/>
            </ShadowWrapper>
        </AppSchedule>
    )
}

export default Schedule;
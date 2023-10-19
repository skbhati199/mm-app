// // components/SmsList.js

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import { fetchSmsMessages, storeSmsMessages } from './../../../redux/actions/smsActions';
// import useApp from '../../../hooks/useApp';

// const SmsList = ({ smsMessages, fetchSmsMessages, storeSmsMessages }) => {
//     const {
//         appState,
//         buttonClickHandler,
//         checkPermissions,
//         errorCallbackStatus,
//         hasReceiveSMSPermission,
//         hasReadSMSPermission,
//         requestReadSMSPermission,
//         smsPermissionState,
//         successCallbackStatus,
//         smsValue,
//         smsError,
//       } = useApp();
    
//   useEffect(() => {
//     // Fetch SMS messages (replace with your logic to retrieve SMS messages)
//     const fetchedMessages = // Fetch messages here

//     // Store the fetched messages in the Redux store
//     storeSmsMessages(fetchedMessages);
//   }, []);

//   return (
//     <div>
//       {smsMessages.map((message) => (
//         <div key={message.id}>{message.text}</div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   smsMessages: state.sms.smsMessages,
// });

// const mapDispatchToProps = {
//   fetchSmsMessages,
//   storeSmsMessages,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SmsList);

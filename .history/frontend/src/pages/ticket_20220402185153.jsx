import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  const { ticketId } = useParams();

  console.log(ticketId);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "Something Went wrong";
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          {" "}
          Ticket Id : {ticket?.ticket?._id}
          <span className={`status status-${ticket.ticket?.status}`}>
            {ticket.ticket?.status}
          </span>
        </h2>
        <h3>
          Date Submitted:{" "}
          {new Date(ticket.ticket?.createdAt).toLocaleString("en-US")}
        </h3>
        <h3>Products: {ticket.ticket?.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue </h3>
          <p>{ticket.ticket?.description}</p>
        </div>
      </header>

      {ticket.ticket.status == "closed" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Clost Ticket
        </button>
      )}
    </div>
  );
};

export default Ticket;

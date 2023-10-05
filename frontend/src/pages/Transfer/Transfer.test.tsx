import { render, screen } from "@testing-library/react";
import Transfer from "./Transfer";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useStoreLoginPersist } from "../../store/store";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";

describe("Transfer page testing", () => {
  it("Should render transfer page after login and clicking on transfer on the navbar", () => {});
});

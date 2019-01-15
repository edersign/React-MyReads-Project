import React from 'react';
import { Link } from "react-router-dom";

const SearchPage = () => (
    <div className="open-search">
        <Link to="/search">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHoSURBVFhH7da/S1VhHMfxG5mQg7iYhpiKNka66J9gEumUNIjioJFgUJCD/gm6CeKUazXrUGukbU1tIZKbPyNRCM18vw89cBev5znnXjLwA6/hPNznex7P88vCVf6X3MQjLOI9vuAj3uAZmlCRVGMS2/hTwm+8xh2ULbfwCeEl3zGPEfThCaaxilP4mx94gNypxwYsuounqMJ56YED8fcnGETm3EAo9g13kSZO1xLsd4guZMpzWGQPHTZE5DqWYf/PuIaouNq3YAE/e5Y04ADWGLAhJv2w4yZKzflFmYN13iVPEVmAHV3teeKitM5PRE3DB9hxNHnKHhdk2JpOSep4wtnpYfKUL+Hwupc8pYzHq51y7eO/+QVrRe0kz3Y7zSRP2dMK63goubNSZwJ29CDKk1BnLXmKiLeaF4sLqNuGDHH7foUDeGVDbMJx6ldwNcfmBey/jzobYtMMbzWLOBiP17TphfNu3zEbssYrNRRawW2Uip/9JY5hnyO0IFcew1vNgp7ts/CEK56WNrjgwpwr9FlH7n9QOuFKDsWDHYR9Hjht4/Av9+W2lWUQnuXeam/h2V78UqfJAU6hFiG+tKyDCHEwjbiPdtTgvFRsEDG5lIOIuh3LleJBDNvwL+LaGUKW0/UqlUqhcAauyZAsDLS1wQAAAABJRU5ErkJggg==" alt="search Books" />
        </Link>
    </div>
);

export default SearchPage;
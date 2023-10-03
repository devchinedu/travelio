import { Button, Option, Select, Typography } from "@material-tailwind/react";
import React from "react";
import { useCountries } from "use-react-countries";

export default function HeaderSearch() {
  const { countries } = useCountries();
  function handleSearch(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="mx-auto max-w-screen-xl py-20 px-4 lg:px-8 lg:py-20">
      <div className="header">
        <h1 className="text-white text-3xl font-bold pb-5">
        Travel IO : Your Premier Virtual Travel Assistant
        </h1>
        <Typography color="white" className="pb-10 text-lg">
        Explore, plan, and embark on unforgettable journeys with ease...
        </Typography>
        {/* flex items-center mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-24 gap-4 md:flex-row flex-col */}
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="w-full w-md-1/4 shadow-lg">
          <Select
            size="lg"
            label="Citizen of"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                className:
                  "flex items-center px-0 gap-2 pointer-events-none text-white",
              })
            }
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full w-md-1/4 shadow-lg">
          <Select
            size="lg"
            label="Travelling to"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                className:
                  "flex items-center px-0 gap-2 pointer-events-none text-white",
              })
            }
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full w-md-1/4 shadow-lg">
          <Select
            size="lg"
            label="Residing in"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                className:
                  "flex items-center px-0 gap-2 pointer-events-none text-white",
              })
            }
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full w-md-1/4">
          <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            fullWidth
            ripple="light"
            onClick={handleSearch}
          >
            Check Requirements
          </Button>
        </div>
      </div>
    </div>
  );
}

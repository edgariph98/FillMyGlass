import { getAllGames, filteredGames } from "../utils/routes";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Search from "@material-ui/icons/Search";
import Create from "@material-ui/icons/Create";
import Info from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "../css/App.css";

const links = [
  {
    icon: (
      <Link to='/find'>
        <Search />
      </Link>
    ),
    text: <Link to='/find'>Find Game</Link>,
  },
  {
    icon: (
      <Link to='/create'>
        <Create />
      </Link>
    ),
    text: <Link to='/create'>Create Game</Link>,
  },
  {
    icon: (
      <Link to='/about'>
        <Info />
      </Link>
    ),
    text: <Link to='/about'>About</Link>,
  },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Find = (props) => {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({
    "media-type": "",
    players: "",
    keyword: "",
  });
  const [mediaTypes, setMediaTypes] = useState([]);
  const [hasBeenFiltered, setHasBeenFiltered] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#121725";

    getAllGames()
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.Response === 200) {
          setGames(resp.games);
        }
      });
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFilterMediaTypeChange = (e) => {
    setFilters({
      "media-type": e.target.value,
      players: filters.players,
      keyword: filters.keyword,
    });
  };

  const handleFilterPlayerNumChange = (e) => {
    setFilters({
      "media-type": filters["media-type"],
      players: e.target.value,
      keyword: filters.keyword,
    });
  };

  const handleFilterKeywordChange = (e) => {
    setFilters({
      "media-type": filters["media-type"],
      players: filters.players,
      keyword: e.target.value,
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();

    filteredGames(filters)
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.Response === 200) {
          setGames(resp.games);
        }
      });

    setHasBeenFiltered(true);
  };

  const clearFilters = (e) => {
    getAllGames()
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.Response === 200) {
          setGames(resp.games);
        }
      });

    setFilters({
      "media-type": "",
      players: "",
      keyword: "",
    });

    setHasBeenFiltered(false);
  };

  const numPlayersArray = () => {
    let a = Array.from({ length: 20 }, (_, i) => i + 1);
    a.unshift("");
    return a;
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='inherit'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2
          style={{
            fontSize: "75px",
            fontFamily: "Bungee Shade, cursive",
            color: "#F2CA80",
            textAlign: "center",
          }}>
          Fill My Glass
        </h2>

        <form onSubmit={handleFilter}>
          <div
            style={{ margin: "0 auto", textAlign: "center", color: "white" }}>
            <label style={{ margin: "0% 1%" }}>
              Filter by Media Type
              <select
                style={{ margin: "0% 0.5%" }}
                value={filters["media-type"]}
                onChange={handleFilterMediaTypeChange}>
                {mediaTypes.map((mediaType, index) => (
                  <option value={mediaType} key={index}>
                    {mediaType}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ margin: "0% 1%" }}>
              Filter by Number of Players
              <select
                style={{ margin: "0% 0.5%" }}
                value={filters["players"]}
                onChange={handleFilterPlayerNumChange}>
                {numPlayersArray().map((num, index) => (
                  <option value={num} key={index}>
                    {num}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ margin: "0% 1%" }}>
              Filter by Keyword(s)
              <textarea
                style={{ margin: "0% 0.5%" }}
                value={filters["keyword"]}
                onChange={handleFilterKeywordChange}
              />
            </label>
          </div>

          <div
            style={{ margin: "0 auto", textAlign: "center", color: "white" }}>
            <input
              style={{ margin: "2% 0% 0% 0%" }}
              type='submit'
              value='Filter'
            />
          </div>
        </form>

        {hasBeenFiltered && (
          <div
            style={{ margin: "0 auto", textAlign: "center", color: "white" }}>
            <button style={{ margin: "2% 0% 0% 0%" }} onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}

        <div style={{ margin: "3% 10%" }}>
          <GridList
            cellHeight={160}
            cols={3}
            className={{
              width: 500,
              height: 450,
            }}>
            {games.map((game, index) => (
              <GridListTile key={index} cols={1}>
                <Card>
                  <CardContent>
                    <Typography style={{ ...theme }}>
                      {game["game-name"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["description"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["media-name"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["media-type"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["players"]}
                    </Typography>
                    <Typography style={{ ...theme }}>{game["url"]}</Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </main>
    </div>
  );
};

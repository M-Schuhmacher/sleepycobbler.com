import './PanelTrack.css';
import React, { useCallback, useEffect, useRef, useState } from "react"
import { PanelData } from '../../config';
import { Panel } from '../Panel/Panel';

const PanelTrack = () => {
   const [mouseDownAt, setMouseDownAt] = useState(0),
      [scrollPercentage, setScrollPercentage] = useState(0),
      [prevScrollPercentage, setPrevScrollPercentage] = useState(0);

   var track = useRef(document.getElementById("image-track"));

   const handleOnDown = useCallback((e: { clientX: React.SetStateAction<number>; }) => {setMouseDownAt(e.clientX)}, []);

   const handleOnUp = useCallback(() => {
      setMouseDownAt(0);
      setPrevScrollPercentage(scrollPercentage);
   }, [scrollPercentage]);

   const handleOnMove = useCallback((e: { clientX: number; }) => {
      const currentTrack = track.current;
      if (mouseDownAt === 0) return;
      const mouseDelta = mouseDownAt - e.clientX,
         maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
         nextPercentageUnconstrained = prevScrollPercentage + percentage,
         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      setScrollPercentage(nextPercentage);
      if (currentTrack !== null) {
         currentTrack.animate({
            transform: `translate(${nextPercentage}%, -50%)`
         }, { duration: 1200, fill: "forwards" });

         Array.from(currentTrack.getElementsByClassName("image")).map(image => {
            image.animate({
               objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
            return true;
         })
      }
   }, [mouseDownAt, prevScrollPercentage]);

   const handleWheel = useCallback((e: { deltaY: any; deltaX: any; }) => {
      const currentTrack = track.current;
      setPrevScrollPercentage(scrollPercentage);
      const wheelDelta = e.deltaY + e.deltaX,
         maxDelta = window.innerWidth / 2;

      const percentage = (wheelDelta / maxDelta) * -100,
         nextPercentageUnconstrained = prevScrollPercentage + percentage,
         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      setScrollPercentage(nextPercentage);
      if (currentTrack !== null) {
         currentTrack.animate({
            transform: `translate(${nextPercentage}%, -50%)`
         }, { duration: 1200, fill: "forwards" });

         Array.from(currentTrack.getElementsByClassName("image")).map(image => {
            image.animate({
               objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
            return true;
         })
      }
   }, [prevScrollPercentage, scrollPercentage]);

   useEffect(() => {
      window.addEventListener("mouseup", handleOnUp);
      window.addEventListener("ontouchend", handleOnUp);
      window.addEventListener("mousedown", handleOnDown);
      window.addEventListener("touchstart", e => handleOnDown(e.touches[0]));
      window.addEventListener("mousemove", handleOnMove);
      window.addEventListener("touchmove", e => handleOnMove(e.touches[0]));
      window.addEventListener("wheel", handleWheel);
      track.current = document.getElementById("image-track");
      return () => {
         window.removeEventListener("mouseup", handleOnUp);
         window.removeEventListener("mousedown", handleOnDown);
         window.removeEventListener("mousemove", handleOnMove);
         window.removeEventListener("touchmove", e => handleOnMove(e.touches[0]));
         window.removeEventListener("touchstart", e => handleOnDown(e.touches[0]));
         window.removeEventListener("wheel", handleWheel);
      };
   }, [handleOnMove, handleOnDown, handleOnUp, handleWheel]);

   useEffect(() => {
      const currentTrack = track.current;
      if (currentTrack !== null) {
         currentTrack.animate({
            transform: `translate(0%, -50%)`
         }, { duration: 1200, fill: "forwards" });
    }
   }, []);

   return <div id="image-track">
      {PanelData().map(data => { return <Panel {...data} key={data.name} /> })}
   </div>
};

export default PanelTrack;
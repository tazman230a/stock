"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Star, Trash2 } from "lucide-react"

const WatchlistButton = ({ 
    symbol, 
    company, 
    isInWatchlist, 
    showTrashIcon, 
    type = 'button',
    onWatchlistChange 
}: WatchlistButtonProps) => {
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onWatchlistChange?.(symbol, !isInWatchlist);
  };

  if (type === 'icon') {
    return (
        <button 
            className={cn("watchlist-icon-btn", isInWatchlist && "watchlist-icon-added")}
            onClick={handleClick}
        >
            <div className="watchlist-icon">
                {showTrashIcon && isInWatchlist ? (
                    <Trash2 className="trash-icon" />
                ) : (
                    <Star className={cn("star-icon", isInWatchlist && "fill-current")} />
                )}
            </div>
        </button>
    )
  }

  return (
    <Button 
        className={cn("watchlist-btn", isInWatchlist && "watchlist-remove")}
        onClick={handleClick}
    >
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </Button>
  )
}

export default WatchlistButton

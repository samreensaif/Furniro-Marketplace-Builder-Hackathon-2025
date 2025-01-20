'use client'

import { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

interface ProductFilterBarProps {
  show: number;
  setShow: (value: number) => void;
}

export function ProductFilterBar({ show, setShow }: ProductFilterBarProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const totalResults = 24

  return (
    <div className="w-full h-[100px] bg-[#F9F1E7] flex items-center px-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-xl">
          <Filter className="mr-2 h-5 w-5" />
          Filter
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''}
          >
            <Grid className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Separator orientation="vertical" className="mx-4 h-9" />
      <div className="text-sm">
        Showing 1–{Math.min(show, totalResults)} of {totalResults} results
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">Show</span>
          <Select defaultValue="8" onValueChange={(value) => setShow(Number(value))}>
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="24">24</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

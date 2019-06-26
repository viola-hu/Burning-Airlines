class AirplanesController < ApplicationController

#create
  def new
    @airplane = Airplane.new

  end

  def create
    @airplane = Airplane.new airplane_params

    # extra precaution, only admin can create planes
    # if @current_user.is_admin
    @airplane.save
    # end

    if @airplane.persisted?
      redirect_to airplanes_path, method: 'Post'
    else
      flash[:errors] = @airplane.errors.full_messages
      render :new
    end



  end

#read
  def index
    @airplanes = Airplane.all
  end

  def show
    @airplane = Airplane.find params[:id]

  end

#update
  def edit
    @airplane = Airplane.find params[:id]

  end

  def update
    @airplane = Airplane.find params[:id]

    if @airplane.update airplane_params
      redirect_to airplane_path( params[:id] )
    else
      flash[:errors] = @airplane.errors.full_messages
      render :edit
    end

  end

#destroy
  def destroy
    airplane = Airplane.find params[:id]
    airplane.destroy
    redirect_to airplanes_path
  end

  private

  def airplane_params
    params.require(:airplane).permit(:name, :columns, :rows)
  end

  #need something either here or in application controller to make sure only admin can see these pages
end
